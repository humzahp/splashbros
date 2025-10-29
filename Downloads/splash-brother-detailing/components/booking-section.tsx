"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: "",
    service: "",
    date: "",
    time: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking submitted:", formData)
    alert("Thank you for your booking request! We will contact you shortly to confirm.")
  }

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Book Your Appointment
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(803) 619-9721"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="vehicleType">Vehicle Type</Label>
                <Select
                  value={formData.vehicleType}
                  onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}
                >
                  <SelectTrigger id="vehicleType">
                    <SelectValue placeholder="Select vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="truck">Truck</SelectItem>
                    <SelectItem value="van">Van</SelectItem>
                    <SelectItem value="luxury">Luxury Vehicle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Detail - $75</SelectItem>
                    <SelectItem value="full">Full Interior + Exterior - $150</SelectItem>
                    <SelectItem value="ceramic">Ceramic Coating - Starting at $300</SelectItem>
                    <SelectItem value="custom">Custom Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time</Label>
                <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="8am">8:00 AM</SelectItem>
                    <SelectItem value="9am">9:00 AM</SelectItem>
                    <SelectItem value="10am">10:00 AM</SelectItem>
                    <SelectItem value="11am">11:00 AM</SelectItem>
                    <SelectItem value="12pm">12:00 PM</SelectItem>
                    <SelectItem value="1pm">1:00 PM</SelectItem>
                    <SelectItem value="2pm">2:00 PM</SelectItem>
                    <SelectItem value="3pm">3:00 PM</SelectItem>
                    <SelectItem value="4pm">4:00 PM</SelectItem>
                    <SelectItem value="5pm">5:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Submit Booking Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
