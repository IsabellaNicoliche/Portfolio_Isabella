const habilidades = ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot', 'SQL', 'Git']
 
const projetos = [
    {
        nome: 'Calendário de Feriados',
        descricao: 'Página que consome uma API pública e exibe os feriados nacionais do ano consultado.',
        tecnologias: ['JavaScript', 'HTML', 'CSS']
    },
    {
        nome: 'Inscrição em Evento',
        descricao: 'Formulário com seleção dinâmica de estado e cidade usando a API do IBGE.',
        tecnologias: ['JavaScript', 'HTML', 'CSS']
    },
    {
        nome: 'Sistema de Cadastro de Clientes',
        descricao: 'Aplicação web para cadastro e gerenciamento de clientes.',
        tecnologias: ['Java', 'Spring Boot']
    }
]
 
const listaHabilidades = document.getElementById('listaHabilidades')
const listaProjetos = document.getElementById('listaProjetos')
const menuToggle = document.getElementById('menuToggle')
const navLinks = document.getElementById('navLinks')
const temaToggle = document.getElementById('temaToggle')
const formContato = document.getElementById('formContato')
const confirmacaoContato = document.getElementById('confirmacaoContato')
 
habilidades.forEach(habilidade => {
    const li = document.createElement('li')
    li.className = 'tag'
    li.textContent = habilidade
    listaHabilidades.appendChild(li)
})
 
projetos.forEach(projeto => {
    const card = document.createElement('div')
    card.className = 'card'
 
    const tagsHtml = projeto.tecnologias
        .map(tecnologia => `<li class="tag">${tecnologia}</li>`)
        .join('')
 
    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <ul class="tags">${tagsHtml}</ul>
    `
 
    listaProjetos.appendChild(card)
})
 
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('aberto')
})
 
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('aberto')
    })
})
 
temaToggle.addEventListener('click', () => {
    document.body.classList.toggle('escuro')
    temaToggle.textContent = document.body.classList.contains('escuro') ? '☀️' : '🌙'
})
 
formContato.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const nome = document.getElementById('nomeContato').value
    confirmacaoContato.textContent = `Obrigada pela mensagem, ${nome}! Vou te responder em breve.`
    formContato.reset()
})
 
document.getElementById('anoAtual').textContent = new Date().getFullYear()