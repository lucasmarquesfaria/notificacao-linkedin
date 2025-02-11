"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell } from "lucide-react"

interface Job {
  id: string
  title: string
  company: string
  location: string
}

interface JobNotificationsProps {
  searchCriteria: { keywords: string; location: string }
}

export default function JobNotifications({ searchCriteria }: JobNotificationsProps) {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("/api/jobs")
      const data = await response.json()
      setJobs(data)
    }

    fetchJobs()
  }, []) // Removed searchCriteria from dependencies

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
          Notificações de trabalho
        </CardTitle>
      </CardHeader>
      <CardContent>
        {filteredJobs.length === 0 ? (
          <p className="text-muted-foreground">Nenhuma notificação de trabalho correspondente.</p>
        ) : (
          <ul className="space-y-4">
            {filteredJobs.map((job) => (
              <li key={job.id} className="border-b pb-2 last:border-b-0">
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
                <p className="text-sm text-muted-foreground">{job.location}</p>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

