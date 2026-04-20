# HelenAI

**Aprendizado sem barreiras — A tecnologia a favor da inclusão**

HelenAI é uma EdTech inclusiva para preparação de Pessoas com Deficiência (PcDs) para ENEM, concursos e seleções públicas. A plataforma aplica princípios de **Desenho Universal para Aprendizagem (DUA)**, **Linguagem Simples** (Lei 15.263/2025) e **Inteligência Artificial** para oferecer uma experiência de estudo acessível e personalizada.

Projeto inscrito no programa **Centelha** de empreendedorismo e inovação.

---

## Principais Funcionalidades

- **Importação inteligente de PDFs** — IA extrai questões e gera automaticamente versões em Linguagem Simples, classificação BNCC e nível de dificuldade
- **Banco de questões** com filtros avançados, editor rich text e curadoria colaborativa
- **Simulados personalizáveis** — cronômetro opcional, feedback humanizado, explicações por IA
- **Acessibilidade nativa** — alto contraste, fonte para dislexia (OpenDyslexic), modo daltônico, ledor, LIBRAS, interface calma (TEA)
- **Anamnese de acessibilidade** — cadastro configura automaticamente as preferências do aluno
- **Gamificação** — ranking, XP, trilhas personalizadas e resumo semanal da IA
- **3 perfis de acesso** — Admin, Conteudista (professor/curador) e Aluno

---

## Tecnologias

### Backend
- Python 3.x
- Django 5.1+
- Django REST Framework
- PostgreSQL (psycopg2)
- Gunicorn

### Protótipos (Frontend)
- HTML/CSS/JS puro (sem framework CSS)
- Chart.js — gráficos
- Select2 + jQuery — filtros com busca
- Quill.js — editor rich text
- Lucide Icons
- Fontes: Inter + OpenDyslexic

---

## Pré-requisitos

- Python 3.10+
- PostgreSQL
- pip

---

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/HelenAI.git
cd HelenAI

# Crie e ative o ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows

# Instale as dependências
pip install -r requirements.txt

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas configurações de banco e secret key

# Execute as migrações
python manage.py migrate

# Inicie o servidor
python manage.py runserver
```

---

## Estrutura do Projeto

```
HelenAI/
├── HelenAI/              # Configurações Django
│   └── docs/             # Documentação do projeto
│       ├── apresentacao/     # Materiais para pitch Centelha
│       ├── produto/          # Especificação, roadmap, decisões de design
│       ├── planejamento/     # Cronograma físico, estimativa de desenvolvimento
│       ├── referencias/      # Exemplos e inputs externos
│       └── imagens/          # Logos e assets visuais
├── prototipos/           # Protótipos HTML/CSS/JS
│   ├── assets/           # CSS, JS, imagens
│   ├── compartilhado/    # Login, cadastro, recuperar senha
│   ├── conteudista/      # Telas do professor/curador
│   ├── aluno/            # Telas do aluno
│   └── admin/            # Telas do administrador
├── requirements.txt
├── manage.py
└── .env
```

---

## Acessibilidade (DUA)

A HelenAI aplica os 3 princípios do Desenho Universal para Aprendizagem:

| Princípio | Descrição | Recursos |
|-----------|-----------|----------|
| **Representação** | Múltiplas formas de apresentar o conteúdo | Texto + áudio + LIBRAS + Linguagem Simples + palavras-chave |
| **Ação e Expressão** | Múltiplas formas de interagir | Navegação por teclado, tempo opcional, pausar/retomar |
| **Engajamento** | Múltiplas formas de motivar | Gamificação, feedback humanizado, trilhas personalizadas |

---

## Equipe

| Nome | Área |
|------|------|
| **Ellen Souza** | IA e Tecnologias Assistivas |
| **Hidelberg Albuquerque** | Machine Learning e PLN |
| **Héldon Albuquerque** | Full Stack e Sistemas Distribuídos |
| **Romário Elias** | Tecnologias Assistivas para Deficiência Intelectual |

---

## Licença

Este projeto é proprietário. Todos os direitos reservados.
