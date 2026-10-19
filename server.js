// Servidor Express - Projeto #06: Oficina Mecânica Automotiva
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3006;

app.get('/api/oficina/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 6,
        sistema: "Oficina Mecânica Automotiva",
        categoria: "Serviços Automotivos",
        tabela_conectada: process.env.TABELA_ALVO || "ordens_servico",
        parametro_ambiente: process.env.BOX_MANUTENCAO || "OFICINA_TURBO_06",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #06] Oficina Mecânica Automotiva rodando em http://localhost:${PORT}/api/oficina/status`);
}); 