"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

interface Emprego {
  id: string
  titulo: string
  empresa: string
  localizacao: string
}

interface NotificacoesEmpregosProps {
  empregos: Emprego[]
  criteriosBusca: { palavrasChave: string; localizacao: string }
  onSelecaoEmprego: (emprego: Emprego) => void
}

export default function NotificacoesEmpregos({
  empregos,
  criteriosBusca,
  onSelecaoEmprego,
}: NotificacoesEmpregosProps) {
  const empregosFiltrados = empregos.filter((emprego) => {
    if (!emprego || !criteriosBusca) return false

    const correspondePalavrasChave =
      (emprego.titulo?.toLowerCase() || "").includes((criteriosBusca.palavrasChave || "").toLowerCase()) ||
      (emprego.empresa?.toLowerCase() || "").includes((criteriosBusca.palavrasChave || "").toLowerCase())

    const correspondeLocalizacao = (emprego.localizacao?.toLowerCase() || "").includes(
      (criteriosBusca.localizacao || "").toLowerCase(),
    )

    return correspondePalavrasChave && correspondeLocalizacao
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Notificações de Vagas
        </CardTitle>
      </CardHeader>
      <CardContent>
        {empregosFiltrados.length === 0 ? (
          <p className="text-muted-foreground">Nenhuma vaga correspondente encontrada.</p>
        ) : (
          <ul className="space-y-4">
            {empregosFiltrados.map((emprego) => (
              <li key={emprego.id} className="border-b pb-2 last:border-b-0">
                <h3 className="font-semibold">{emprego.titulo}</h3>
                <p className="text-sm text-muted-foreground">{emprego.empresa}</p>
                <p className="text-sm text-muted-foreground">{emprego.localizacao}</p>
                <Button onClick={() => onSelecaoEmprego(emprego)} className="mt-2" variant="outline">
                  Ver Detalhes
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

