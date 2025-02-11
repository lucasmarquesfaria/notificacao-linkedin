import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Job {
  id: string
  title: string
  company: string
  location: string
}

interface JobDetailsProps {
  job: Job | null
  onClose: () => void
}

export default function JobDetails({ job, onClose }: JobDetailsProps) {
  if (!job) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">
          <strong>Empresa:</strong> {job.company}
        </p>
        <p className="mb-4">
          <strong>Localização:</strong> {job.location}
        </p>
        <p className="mb-4">
          Aqui seria exibida informações mais detalhadas sobre a vaga, como a descrição do trabalho, requisitos e como
          se candidatar.
        </p>
        <Button onClick={onClose}>Fechar</Button>
      </CardContent>
    </Card>
  )
}

