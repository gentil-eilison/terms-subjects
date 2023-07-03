const FIRST_TERM_SUBJECTS = [
    {
        title: "Empreendedorismo",
        workload: 30,
        term: 1
    },
    {
        title: "Língua Inglesa",
        workload: 60,
        term: 1
    },
    {
        title: "Matemática Discreta",
        workload: 60,
        term: 1
    },
    {
        title: "Programação de Computadores",
        workload: 90,
        term: 1
    },
    {
        title: "Seminário de Integração Acadêmica",
        workload: 4,
        term: 1
    },
    {
        title: "Web Design",
        workload: 60,
        term: 1
    },
]

const SECOND_TERM_SUBJECTS = [
    {
        title: "Algoritmos",
        workload: 60,
        term: 2
    },
    {
        title: "Epistemologia da Ciência",
        workload: 30,
        term: 2
    },
    {
        title: "Inglês para Informática",
        workload: 60,
        term: 2
    },
    {
        title: "Língua Portuguesa",
        workload: 60,
        term: 2
    },
    {
        title: "Programação Orientada a Objetos",
        workload: 90,
        term: 2
    },
]

const THIRD_TERM_SUBJECTS = [
    {
        title: "Arquitetura de Computadores",
        workload: 60,
        term: 3
    },
    {
        title: "Computador e Sociedade",
        workload: 30,
        term: 3
    },
    {
        title: "Interface Humano-Computador",
        workload: 60,
        term: 3
    },
    {
        title: "Metodologia do Trabalho Científico",
        workload: 30,
        term: 3
    },
    {
        title: "Redes de Computadores",
        workload: 60,
        term: 3
    },
    {
        title: "Seminário de Iniciação à Pesquisa e à Extensão",
        workload: 30,
        term: 3
    },
    {
        title: "Sistemas Digitais",
        workload: 60,
        term: 3
    }
]

const TERMS_SUBJECTS = [
    ...FIRST_TERM_SUBJECTS,
    ...SECOND_TERM_SUBJECTS,
    ...THIRD_TERM_SUBJECTS,
]

module.exports = Object.freeze({
    termsSubjects: TERMS_SUBJECTS
})