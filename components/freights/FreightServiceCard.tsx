import { ArrowLeftRight, Building2, Bus, BusFront, CalendarClock, Car, Check, CheckCircle2, Fuel, Info, Luggage, MapPin, MapPinned, MessageCircle, MessageCircleWarning, Navigation, Route, User2, Users2, Van, Wifi } from "lucide-react";
import Image from "next/image";
import Tag from "../Tag";
import { RequiresAtLeastOne } from "@/app/types/utils";

type VehicleType = 'car' | 'van' | 'bus' | 'minibus';
type ServiceResource = { text: string; icon: React.ElementType };
type CoverageType = 'COVERED' | 'ON_CONSULTATION' | 'NOT_COVERED';

interface Company {
  name: string;
  location: string;
  since: string;
}
interface Vehicle {
  make: string;
  capacity: number;
  loadType: 'passenger' | 'cargo';
  type: VehicleType;
  model: string;
  year: number;
}
interface RouteOffer {
  id: string;
  origin: string;
  destination: string;
  // isCovered: boolean;
}
interface CoverageArea {
  id: string;
  origin: string; // city name
  radiusKm: number; // in kilometers
  // requiresConfirmation: boolean; // talvez cobre a rota, mas precisa ser consultado
}
interface DriverMatch {
  by: 'route' | 'coverage-area' | 'both' | 'none';
  value: CoverageType;
  routeId: string | null; // routeId ou coverageAreaId
  coverageAreaId: string | null;
}
type BaseProps = {
  title: string;
  vehicle: Vehicle;
  company: Company;
  routes?: RouteOffer[];
  coverageAreas?: CoverageArea[];
  driverMatch: DriverMatch;
  resources: ServiceResource[];
  price: number | null;
  isSubscription?: boolean;
  src: string;
}
type Props = RequiresAtLeastOne<BaseProps, 'routes' | 'coverageAreas'>;

/* subcomponents */
function FixedRoutes({ routes, driverMatch }: { routes: RouteOffer[], driverMatch: DriverMatch }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <div className="size-5 bg-gray-200 rounded flex items-center justify-center">
          <MapPin className="size-3 text-gray-600" />
        </div>
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          Rota fixa
        </span>
      </div>
      {routes.map((route) => (
        <div key={route.id} className="flex items-center gap-3 ml-2">
          <div className="flex items-center gap-2 flex-1 min-w-0 text-sm">
            <span className="text-sm font-medium text-gray-800">{route.origin}</span>
            <ArrowLeftRight className="size-3.5 text-gray-400" />
            <span className="text-sm font-medium text-gray-800">{route.destination}</span>
          </div>

          {(driverMatch?.by === 'route' || driverMatch?.by === 'both') && driverMatch?.routeId === route.id && driverMatch?.value === 'COVERED' && (
            <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
              <Check className="size-3 text-green-600" />
              <span className="text-xs font-medium text-green-700">Atende a sua rota</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )


}

function CoverageAreas({ coverageAreas, driverMatch }: { coverageAreas: CoverageArea[], driverMatch: DriverMatch }) {
  return coverageAreas.map((coverageArea) => (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <div className="size-5 bg-blue-100 rounded flex items-center justify-center">
          <MapPinned className="size-3 text-blue-600" />
        </div>
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          Área de atendimento
        </span>
      </div>

      <div className="ml-2">
        <p className="text-sm text-gray-800">
          <span className="font-semibold text-blue-700 text-sm">{coverageArea.radiusKm}km</span> a partir de <span className="font-semibold">{coverageArea.origin}</span>
        </p>

        {(driverMatch?.by === 'coverage-area' || driverMatch?.by === 'both') && driverMatch?.coverageAreaId === coverageArea.id && driverMatch?.value === 'ON_CONSULTATION' && (
          <div className="flex items-center gap-1 mt-2 text-yellow-700">
            <MessageCircleWarning className="size-3.5" />
            <span className="text-xs">Sua rota está na área de cobertura, consulte se sua rota é atendida</span>
          </div>
        )}
      </div>
    </div>
  ))
}

function ServiceCoveragesMessage() {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-500 border-t pt-2">
      <Info className="size-3.5" />
      <span>
        Este veículo atende <strong>rotas fixas</strong> e também <strong>área de cobertura</strong>
      </span>
    </div>
  )
}
export default function FreightServiceCard({
  title,
  vehicle,
  company,
  routes,
  coverageAreas,
  driverMatch,
  resources,
  price,
  isSubscription = false,
  src
}: Props) {
  const PHOTO_SIZE = 480;
  const vehicleIconsMap: Record<VehicleType, React.ElementType> = {
    car: Car,
    van: Van,
    bus: BusFront,
    minibus: Bus
  }
  const vehicleTypeLabelsMap: Record<VehicleType, string> = {
    car: "Carro",
    van: "Van",
    bus: "Ônibus",
    minibus: "Micro-ônibus"
  }
  const Icon = vehicleIconsMap[vehicle.type] || null;
  const IconButton = price ? MessageCircle : CalendarClock;
  return (
    <article className="flex flex-col w-fit bg-white rounded-md overflow-hidden shadow-lg max-w-120">
      <header className="relative flex bg-gray-100">
        <Image
          src={src}
          className=""
          width={PHOTO_SIZE}
          height={PHOTO_SIZE}
          alt=""
        />
        <div className="absolute px-2 pb-2 flex flex-col justify-end z-1 self-end text-white bg-linear-to-t from-black/54 to-black/5 h-full w-full">
          {Icon &&
            <span
              className="text-white text-xs flex gap-2 rounded-full size-fit font-medium items-end mb-1"
            >
              <Icon className="size-4.5" /> {vehicleTypeLabelsMap[vehicle.type]}
            </span>
          }
          <h1 className="text-sm font-medium mb-1 truncate">{title}</h1>
          <p className="text-xs font-light">{vehicle.model} • {company.location}</p>
        </div>
      </header>
      <div className="flex flex-col p-4 gap-4">
        <div className="flex gap-2">
          <div className="bg-gray-200 size-9 flex place-items-center place-content-center rounded-md">
            <Building2 className="size-6 text-gray-600" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold text-gray-900">{company.name}</h2>
            <p className="text-xs text-gray-600">Sede: {company.location} • Desde {company.since}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {routes && routes.length > 0 && <FixedRoutes routes={routes} driverMatch={driverMatch} />}
          {coverageAreas && coverageAreas.length > 0 && <CoverageAreas coverageAreas={coverageAreas} driverMatch={driverMatch} />}
          {/* Resumo combinado quando ambos existem */}
          {routes && routes.length > 0 && coverageAreas && coverageAreas.length > 0 && <ServiceCoveragesMessage />}
        </div>
        <div className="flex gap-2">
          <Users2 className="size-5 text-gray-600 mt-0.5" />
          <div className="flex flex-col">
            <p className="text-sm text-gray-900">{vehicle.capacity} assentos</p>
            <p className="text-gray-600 text-xs">Capacidade</p>
          </div>
        </div>
        {resources.length > 0 &&
          <div className="flex flex-col justify-center">
            <h3 className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="size-4 text-blue-500" /><span className="text-sm">Inclui:</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {resources.map((resource, index) => (
                <Tag key={index} text={resource.text} icon={resource.icon} />
              ))}
            </div>
          </div>
        }
      </div>
      <footer className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between p-4">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">{isSubscription ? 'Valor mensal' : 'Valor do frete'}</span>
          <p className="text-lg font-medium">{price ? `R$ ${price.toFixed(2)}${isSubscription ? '/mês' : ''}` : 'Sob consulta'}</p>
        </div>
        <button className="flex gap-2 justify-center text-sm py-2 cursor-pointer bg-linear-to-r from-slate-500 to-slate-800 bg-clip-text">
          <IconButton className="size-5" /> {price ? 'Solicitar serviço' : 'Solicitar orçamento'}
        </button>
      </footer>
    </article>
  )
}

// marca • modelo • principal característica ou capacidade
// Empresa • n veículos • Com ou sem CNPJ
// Individual •

// van executiva luxo - conforto sobre rodas
// Bancos de couro reclináveis
// Frigobar abastecido
// Tomadas individuais
// capacidade para até 14 passageiros
// Solicitar orçamento

// Renotur
// conforto e qualidade
