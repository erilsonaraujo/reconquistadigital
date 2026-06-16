# Reconquista 18 Dias | BrancoIA

Um Progressive Web App (PWA) de alta conversão e percepção premium, desenvolvido para guiar usuários por um programa de 18 dias de transformação emocional e autoconhecimento.

## 🚀 Stack Tecnológica

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS** (estilização)
- **Framer Motion** (animações e microinterações)
- **Lucide React** (ícones)
- **Zustand** (gerenciamento de estado)
- **localStorage** (persistência de dados)

## 🎨 Design System

- **Tema**: Dark Mode premium
- **Cores Principais**:
  - Fundo: `bg-slate-950`
  - Texto: `text-slate-100`
  - Acento Dourado: `amber-400`
  - Acento Místico: `violet-600`
- **Tipografia**: Inter (Google Fonts)
- **Bordas**: `rounded-2xl` e `rounded-3xl`

## 📁 Estrutura do Projeto

```
/workspace
├── src/
│   ├── app/
│   │   ├── dashboard/page.tsx    # Tela principal
│   │   ├── dia/[id]/page.tsx     # Conteúdo diário
│   │   ├── diario/page.tsx       # Diário emocional
│   │   ├── globals.css           # Estilos globais
│   │   ├── layout.tsx            # Layout raiz
│   │   └── page.tsx              # Onboarding/Quiz
│   ├── components/
│   │   └── PanicButton.tsx       # Botão de pânico
│   ├── data/
│   │   └── days.ts               # Dados dos 18 dias
│   └── store/
│       └── appStore.ts           # Zustand store
├── public/
│   └── manifest.json             # PWA manifest
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🛠️ Instalação e Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start
```

## 📱 Funcionalidades

### 1. Onboarding (Quiz de 3 etapas)
- Perguntas sobre o término
- Animações de slide suaves
- Salva respostas no Zustand/localStorage

### 2. Dashboard Principal
- Barra de progresso visual
- Card "Tarefa de Hoje"
- Grid dos 18 dias com status (completo, atual, bloqueado)
- FAB (Floating Action Button) para Botão de Pânico

### 3. Tela de Conteúdo Diário
- 3 seções com acordeão animado:
  - 🧠 Psicologia do Dia
  - 🔮 Tarot & Energia
  - 🕯️ Ritual Prático
- Botão "Marcar como Concluído"

### 4. Diário Emocional
- Textarea com auto-save
- Histórico de entradas anteriores
- Persistência no localStorage

### 5. Botão de Pânico
- Exercício de respiração 4-7-8
- Animação de círculo respiratório
- Frases de acalmar

## 🔄 Persistência de Dados

O app utiliza localStorage para persistir:
- Dia atual do usuário
- Dias completados
- Respostas do quiz
- Entradas do diário

## 📄 PWA Features

- Manifest.json configurado
- Meta tags para iOS Web App
- Theme color personalizado
- Display standalone

## 🚀 Deploy na Vercel

Este projeto está pronto para deploy na Vercel:

1. Conecte seu repositório GitHub na Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático em cada push

## 📝 Licença

Desenvolvido por BrancoIA © 2024
