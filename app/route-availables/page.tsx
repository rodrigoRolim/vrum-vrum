import ExcursionCard from "@/components/excursion/ExcursionCard";
import RouteCard from "@/components/RouteCard";
import TravelRoute from "@/components/TravelRoute";

export default function RouteAvailables() {
  return (
    <div>
      <RouteCard 
        origin="São paulo - SP" 
        destination="Campinas - SP" 
        departureTime="12:00" 
        seats={12} 
        initialPrice={45} 
        vehicle="microbus"
      />
      <ExcursionCard />
    </div>
  )
}