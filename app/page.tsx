"use client"

import { useState, useEffect, useCallback } from "react"
import FormularioBuscaEmpregos from "../components/formulario-busca-empregos"
import NotificacoesEmpregos from "../components/notificacoes-empregos"
import FormularioAdicionarEmprego from "../components/formulario-adicionar-emprego"
import DetalhesEmprego from "../components/detalhes-emprego"

interface Emprego {
  id: string
  titulo: string
  empresa: string
  localizacao: string
}

export default function Home() {
  const [criteriosBusca, setCriteriosBusca] = useState({ palavrasChave: "", localizacao: "" })
  const [empregoSelecionado, setEmpregoSelecionado] = useState<Emprego | null>(null)
  const [empregos, setEmpregos] = useState<Emprego[]>([])

  const handleBusca = (criterios: { palavrasChave: string; localizacao: string }) => {
    setCriteriosBusca(criterios)
  }

  const handleEmpregoAdicionado = (novoEmprego: Emprego) => {
    setEmpregos((empregosAnteriores) => [...empregosAnteriores, novoEmprego])
  }

  const handleSelecaoEmprego = (emprego: Emprego) => {
    setEmpregoSelecionado(emprego)
  }

  const buscarEmpregos = useCallback(async () => {
    const resposta = await fetch("/api/jobs")
    const dados = await resposta.json()
    setEmpregos(dados)
  }, [])

  useEffect(() => {
    buscarEmpregos()
  }, [buscarEmpregos])

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Minhas Notificações de Vagas</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <FormularioBuscaEmpregos onBusca={handleBusca} />
          <div className="mt-4">
            <FormularioAdicionarEmprego onEmpregoAdicionado={handleEmpregoAdicionado} />
          </div>
        </div>
        <div>
          {empregoSelecionado ? (
            <DetalhesEmprego emprego={empregoSelecionado} onFechar={() => setEmpregoSelecionado(null)} />
          ) : (
            <NotificacoesEmpregos
              empregos={empregos}
              criteriosBusca={criteriosBusca}
              onSelecaoEmprego={handleSelecaoEmprego}
            />
          )}
        </div>
      </div>
    </main>
  )
}

