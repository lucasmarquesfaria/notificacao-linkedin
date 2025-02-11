import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Emprego {
  id: string
  titulo: string
  empresa: string
  localizacao: string
}

interface DetalhesEmpregoProps {
  emprego: Emprego | null
  onFechar: () => void
}

export default function DetalhesEmprego({ emprego, onFechar }: DetalhesEmpregoProps) {
  if (!emprego) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>{emprego.titulo}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">
          <strong>Empresa:</strong> {emprego.empresa}
        </p>
        <p className="mb-4">
          <strong>Localização:</strong> {emprego.localizacao}
        </p>
        <p className="mb-4">
          Aqui você exibiria informações mais detalhadas sobre a vaga, como a descrição do cargo, requisitos e como se
          candidatar.
        </p>
        <Button onClick={onFechar}>Fechar</Button>
      </CardContent>
    </Card>
  )
}

