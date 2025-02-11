"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface FormularioBuscaEmpregosProps {
  onBusca: (criterios: { palavrasChave: string; localizacao: string }) => void
}

export default function FormularioBuscaEmpregos({ onBusca }: FormularioBuscaEmpregosProps) {
  const [palavrasChave, setPalavrasChave] = useState("")
  const [localizacao, setLocalizacao] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onBusca({ palavrasChave, localizacao })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Buscar Vagas</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="palavrasChave">Palavras-chave</Label>
            <Input
              id="palavrasChave"
              placeholder="ex: Engenheiro de Software, React"
              value={palavrasChave}
              onChange={(e) => setPalavrasChave(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="localizacao">Localização</Label>
            <Input
              id="localizacao"
              placeholder="ex: São Paulo, Remoto"
              value={localizacao}
              onChange={(e) => setLocalizacao(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Buscar
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

