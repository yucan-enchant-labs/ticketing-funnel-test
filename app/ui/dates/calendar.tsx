/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/TOVqRojGYoy
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "../card"
import { Calendar } from "../calendar"
import { Button } from "../buttons"

export function EncCalendar() {
  const soldOutDates: string[] = ["2024-02-14", "2024-02-15", "2024-02-16"];
  const soldOutDatesAsDate: Date[] = soldOutDates.map(dateString => new Date(dateString));
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-2xl p-4 md:p-6 lg:p-8">
        <Card>
          <CardHeader>
            <CardTitle>Select a Date</CardTitle>
            <CardDescription>
              Please select a date to proceed with ticket selection. Dates marked as "Sold Out" are not available.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              className="w-full"
              initialFocus
              mode="single"
              modifiers={{
                soldOut: soldOutDatesAsDate,
              }}
              modifiersClassNames={{
                soldOut: "bg-red-500 text-white",
              }}
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Proceed to Ticket Selection</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
