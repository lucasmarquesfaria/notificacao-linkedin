"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface JobSearchFormProps {
  onSearch: (criteria: { keywords: string; location: string }) => void
}

export default function JobSearchForm({ onSearch }: JobSearchFormProps) {
  const [keywords, setKeywords] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch({ keywords, location })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Definir Critérios de Busca</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="keywords">Palavras-chave</Label>
            <Input
              id="keywords"
              placeholder="ex: Engenheiro de Software, React"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Localização</Label>
            <Input
              id="location"
              placeholder="ex: São Paulo, Remoto"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Buscar Vagas
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

