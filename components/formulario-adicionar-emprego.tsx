"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface Emprego {
  id: string
  titulo: string
  empresa: string
  localizacao: string
}

interface FormularioAdicionarEmpregoProps {
  onEmpregoAdicionado: (emprego: Emprego) => void
}

export default function FormularioAdicionarEmprego({ onEmpregoAdicionado }: FormularioAdicionarEmpregoProps) {
  const [titulo, setTitulo] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [localizacao, setLocalizacao] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const resposta = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ titulo, empresa, localizacao }),
    })

    if (resposta.ok) {
      const novoEmprego = await resposta.json()
      onEmpregoAdicionado(novoEmprego)
      setTitulo("")
      setEmpresa("")
      setLocalizacao("")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Adicionar Nova Vaga</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="titulo">Título da Vaga</Label>
            <Input id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="empresa">Empresa</Label>
            <Input id="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="localizacao">Localização</Label>
            <Input id="localizacao" value={localizacao} onChange={(e) => setLocalizacao(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full">
            Adicionar Vaga
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

