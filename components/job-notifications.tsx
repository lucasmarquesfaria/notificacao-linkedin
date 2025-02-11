"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

interface Job {
  id: string
  title: string
  company: string
  location: string
}

interface JobNotificationsProps {
  jobs: Job[]
  searchCriteria: { keywords: string; location: string }
  onJobSelect: (job: Job) => void
}

export default function JobNotifications({ jobs, searchCriteria, onJobSelect }: JobNotificationsProps) {
  const filteredJobs = jobs.filter((job) => {
    const keywordsMatch =
      job.title.toLowerCase().includes(searchCriteria.keywords.toLowerCase()) ||
      job.company.toLowerCase().includes(searchCriteria.keywords.toLowerCase())
    const locationMatch = job.location.toLowerCase().includes(searchCriteria.location.toLowerCase())
    return keywordsMatch && locationMatch
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
        {filteredJobs.length === 0 ? (
          <p className="text-muted-foreground">Nenhuma notificação de vaga correspondente.</p>
        ) : (
          <ul className="space-y-4">
            {filteredJobs.map((job) => (
              <li key={job.id} className="border-b pb-2 last:border-b-0">
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
                <p className="text-sm text-muted-foreground">{job.location}</p>
                <Button onClick={() => onJobSelect(job)} className="mt-2" variant="outline">
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

