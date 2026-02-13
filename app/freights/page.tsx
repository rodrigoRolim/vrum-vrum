'use client';

import { Autocomplete } from "@/components/Autocomplete";
import FreightServiceCard from "@/components/freights/FreightServiceCard";
import VehicleTypeFilter, { VehicleType } from "@/components/small-shipment/VehicleTypeFilters";
import { Baby, Bed, Camera, ChevronLeft, Coffee, Droplet, Lock, Luggage, Map, MapPin, Moon, Phone, Shield, Snowflake, Tv, User, Utensils, Wifi, Zap } from "lucide-react";
import { useState } from "react";
import { MapAddress } from "../api/address/route";
import useAutocomplete from "@/hooks/useAutocomplete";
import { fetchOSM } from "@/services/osm";
import Button from "@/components/Button";

export default function Freights() {
  const [vehicleType, setVehicleType] = useState<VehicleType>('all')
  const [queryOrigin, setQueryOrigin] = useState("")
  const [queryDestination, setQueryDestination] = useState("")
  const [origin, setOrigin] = useState<MapAddress>()
  const [destination, setDestination] = useState<MapAddress>()
  const { options: optionsOrigin, loading: loadingOrigin } = useAutocomplete<MapAddress>({
    query: queryOrigin,
    fetcher: fetchOSM,
    minLength: 3,
    delay: 400
  })
  const { options: optionsDestination, loading: loadingDestination } = useAutocomplete<MapAddress>({
    query: queryDestination,
    fetcher: fetchOSM,
    minLength: 3,
    delay: 400
  })

  function selectOrigin(option: MapAddress) {
    setOrigin(option)
  }

  function selectDestination(option: MapAddress) {
    setDestination(option)
  }

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 p-2">
        <ChevronLeft className="h-6"/>
        <div className="flex flex-col">
          <h1 className="text-base">Buscar por transporte</h1>
          <p className="text-xs text-gray-600">Encontre serviços de fretamento de veículos</p>
        </div>
      </div>
      <div className="flex flex-col gap-0.5 px-4">
        <div className="flex flex-col gap-8 bg-white rounded-lg shadow-md p-4 mt-1">
          <div className="flex flex-col gap-4">
            <Autocomplete<MapAddress>
              options={optionsOrigin}
              label="Cidade de Embarque *" 
              icon={MapPin}  
              query={queryOrigin}
              selected={origin?.text || queryOrigin}
              onQuery={setQueryOrigin}
              onSelectOption={selectOrigin}
            />
            <Autocomplete<MapAddress>
              options={optionsDestination}
              label="Cidade de Desembarque *" 
              icon={MapPin}  
              query={queryDestination}
              selected={destination?.text || queryDestination}
              onQuery={setQueryDestination}
              onSelectOption={selectDestination}
            />
          </div>
          <Button 
            label="Buscar"
            icon={Map}
            onClick={() => {}}
            variant="primary"
          />
        </div>
        <h2 className="text-xs text-gray-600 font-medium mt-6">Filtrar por veículo:</h2>
        <VehicleTypeFilter
          value={vehicleType}
          onChange={setVehicleType}
        />
      </div>

      <div className="flex flex-col items-center gap-4 px-4 w-full py-8">
        <FreightServiceCard
          src="https://images.unsplash.com/photo-1597685204565-110abf469a1e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Transporte de Carga Pesada"
          vehicle={{
            type: "car",
            model: "Volvo FH 540",
            make: "Volvo",
            capacity: 20,
            loadType: 'cargo',
            year: 2020,
          }}
          company={{
            name: "Transporte Rápido LTDA",
            location: "São Paulo, SP",
            since: "1998",
          }}
          route={{
            origin: "São Paulo, SP",
            destination: "Rio de Janeiro, RJ",
            isCovered: true,
          }}
          resources={[
            { text: "Rastreamento em tempo real", icon: Map },
            { text: "Suporte 24/7", icon: Zap },
            { text: "Seguro de carga total", icon: Shield },
            { text: "Motorista experiente", icon: User }
          ]}
          price={1500}
        />

        <FreightServiceCard
          src="https://images.unsplash.com/photo-1593914370442-49d414beca24?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Van Executiva - Conforto e Segurança"
          vehicle={{
            type: "van",
            model: "Mercedes-Benz Sprinter",
            make: "Mercedes",
            capacity: 14,
            loadType: 'passenger',
            year: 2022,
          }}
          company={{
            name: "Executivo Transportes",
            location: "Rio de Janeiro, RJ",
            since: "2005",
          }}
          route={{
            origin: "Rio de Janeiro, RJ",
            destination: "São Paulo, SP",
            isCovered: true,
          }}
          resources={[
            { text: "Wi-Fi gratuito", icon: Wifi },
            { text: "Água e snacks", icon: Coffee },
            { text: "Motorista com traje", icon: User },
            { text: "Bagageiro amplo", icon: Luggage }
          ]}
          price={1200}
        />

        <FreightServiceCard
          src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Ônibus Turismo - 44 Lugares"
          vehicle={{
            type: "bus",
            model: "Marcopolo Paradiso 1800",
            make: "Marcopolo",
            capacity: 44,
            loadType: 'passenger',
            year: 2021,
          }}
          company={{
            name: "Viação Turismo Brasil",
            location: "Belo Horizonte, MG",
            since: "1990",
          }}
          route={{
            origin: "Belo Horizonte, MG",
            destination: "Vitória, ES",
            isCovered: true,
          }}
          resources={[
            { text: "Guia turístico", icon: Map },
            { text: "Seguro viagem", icon: Shield },
            { text: "Lanches inclusos", icon: Coffee },
            { text: "Ar condicionado", icon: Snowflake }
          ]}
          price={3500}
        />

        <FreightServiceCard
          src="https://images.unsplash.com/photo-1534011056808-50c1c6082fe7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Micro-ônibus Corporativo"
          vehicle={{
            type: "minibus",
            model: "Volkswagen Constellation",
            make: "Volkswagen",
            capacity: 30,
            loadType: 'passenger',
            year: 2023,
          }}
          company={{
            name: "Corporate Transport",
            location: "Campinas, SP",
            since: "2010",
          }}
          route={{
            origin: "Campinas, SP",
            destination: "Santos, SP",
            isCovered: true,
          }}
          resources={[
            { text: "Wi-Fi corporativo", icon: Wifi },
            { text: "Tomadas individuais", icon: Zap },
            { text: "Cofre para documentos", icon: Lock },
            { text: "Água mineral", icon: Droplet }
          ]}
          price={950}

        />

        <FreightServiceCard
          src="https://images.unsplash.com/photo-1764089859662-7b4773dff85b?q=80&w=1237&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Carro Executivo com Motorista"
          vehicle={{
            type: "car",
            model: "BMW Série 7",
            make: "BMW",
            capacity: 3,
            loadType: 'passenger',
            year: 2024,
          }}
          company={{
            name: "Elite Transport",
            location: "São Paulo, SP",
            since: "2015",
          }}
          route={{
            origin: "São Paulo, SP",
            destination: "Guarulhos, SP",
            isCovered: true,
          }}
          resources={[
            { text: "Motorista particular", icon: User },
            { text: "Frigobar", icon: Snowflake },
            { text: "Segurança blindada", icon: Shield },
            { text: "Wi-Fi premium", icon: Wifi }
          ]}
          price={350}
        />

        {/* <FreightServiceCard
          title="Caminhão para Mudança Residencial"
          vehicle={{
            type: "bus",
            model: "Mercedes-Benz Atego",
            make: "Mercedes",
            capacity: 6,
            loadType: 'passenger',
            year: 2020,
          }}
          company={{
            name: "Mudanças Express",
            location: "Curitiba, PR",
            since: "2008",
          }}
          route={{
            origin: "Curitiba, PR",
            destination: "Florianópolis, SC",
            isCovered: true,
          }}
          resources={[
            { text: "2 ajudantes", icon: Users },
            { text: "Caixas de mudança", icon: Package },
            { text: "Seguro dos pertences", icon: Shield },
            { text: "Montagem de móveis", icon: ToolCase }
          ]}
          price={1200}
        /> */}
        <FreightServiceCard
          src="https://media.istockphoto.com/id/2217944397/pt/foto/school-monitor-assists-children-getting-off-school-transport-van.jpg?s=2048x2048&w=is&k=20&c=2bdak2wnU5XBA4rTVk5a9J_dFc0Idq7oJTwWbStw5JM="
          title="Van para Transporte Escolar"
          vehicle={{
            type: "van",
            model: "Fiat Ducato",
            make: "Fiat",
            capacity: 15,
            loadType: 'passenger',
            year: 2022,
          }}
          company={{
            name: "Escolar Seguro",
            location: "Porto Alegre, RS",
            since: "2012",
          }}
          route={{
            origin: "Porto Alegre, RS",
            destination: "Novo Hamburgo, RS",
            isCovered: true,
          }}
          resources={[
            { text: "Monitor capacitado", icon: User },
            { text: "GPS escolar", icon: Map },
            { text: "Cadeirinhas infantis", icon: Baby },
            { text: "Comunicação com pais", icon: Phone }
          ]}
          price={180}
          isSubscription
        />

        <FreightServiceCard
          src="https://media.istockphoto.com/id/957140868/pt/foto/interior-of-sleeper-bus-for-tourists-and-other-passengers.webp?a=1&b=1&s=612x612&w=0&k=20&c=KVdL1KtvfThtdW0FX1ZxPHSwNCPE3-QivFeHM_24SBk="
          title="Ônibus Leito - Viagem Noturna"
          vehicle={{
            type: "bus",
            model: "Busscar El Buss 360",
            make: "Busscar",
            capacity: 30,
            loadType: 'passenger',
            year: 2023,
          }}
          company={{
            name: "Viação Norte-Sul",
            location: "Salvador, BA",
            since: "1985",
          }}
          route={{
            origin: "Salvador, BA",
            destination: "Recife, PE",
            isCovered: true,
          }}
          resources={[
            { text: "Poltrona leito", icon: Bed },
            { text: "Jantar incluso", icon: Utensils },
            { text: "Cobertor e travesseiro", icon: Moon },
            { text: "Entretenimento", icon: Tv }
          ]}
          price={2800}
        />

        {/* <FreightServiceCard
          title="Carreta para Carga Seca"
          vehicle={{
            type: "van",
            model: "Scania R500",
            make: "Scania",
            capacity: 30,
            loadType: 'cargo',
            year: 2021,
          }}
          company={{
            name: "Logística Brasil",
            location: "Goiânia, GO",
            since: "2000",
          }}
          route={{
            origin: "Goiânia, GO",
            destination: "Brasília, DF",
            isCovered: true,
          }}
          resources={[
            { text: "Rastreamento GPS", icon: Map },
            { text: "Motorista habilitado", icon: User },
            { text: "Seguro RCTR-C", icon: Shield },
            { text: "Carga e descarga", icon: Truck }
          ]}
          price={950}
        /> */}

        <FreightServiceCard
          src="https://plus.unsplash.com/premium_photo-1676573201285-20af67891d0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1pY3JvJTIwb25pYnVzJTIwdHVyaXN0aWNvfGVufDB8fDB8fHww"
          title="Micro-ônibus Turístico"
          vehicle={{
            type: "minibus",
            model: "Agrale MA 9.5",
            make: "Agrale",
            capacity: 22,
            loadType: 'passenger',
            year: 2022,
          }}
          company={{
            name: "Turismo & Aventura",
            location: "Fortaleza, CE",
            since: "2018",
          }}
          route={{
            origin: "Fortaleza, CE",
            destination: "Sob Consulta",
            isCovered: true,
          }}
          resources={[
            { text: "Guia turístico", icon: Map },
            { text: "Paradas fotográficas", icon: Camera },
            { text: "Água mineral", icon: Droplet },
            { text: "Ar condicionado", icon: Snowflake }
          ]}
          price={null}
        />

        {/* <FreightServiceCard
          title="Transporte de Animais Vivos"
          vehicle={{
            type: "truck",
            model: "Ford Cargo 2429",
            make: "Ford",
            capacity: 15,
            loadType: 'cargo',
            year: 2021,
            features: ["Ventilação forçada", "Piso antiderrapante", "Divisórias"]
          }}
          company={{
            name: "AgroTransport",
            location: "Campo Grande, MS",
            since: "2003",
          }}
          route={{
            origin: "Campo Grande, MS",
            destination: "São Paulo, SP",
            isCovered: true,
          }}
          resources={[
            { text: "Veterinário acompanhante", icon: Heart },
            { text: "Alimentação e água", icon: Droplet },
            { text: "Monitoramento térmico", icon: Thermometer },
            { text: "Seguro animal", icon: Shield }
          ]}
          price={3200}
          badge="Transporte animal"
        /> */}

  {/* // Card 12: Van para Delivery de Mercadorias
        <FreightServiceCard
          title="Van para Delivery Rápido"
          vehicle={{
            type: "van",
            model: "Renault Master",
            make: "Renault",
            capacity: 3,
            loadType: 'cargo',
            year: 2023,
            features: ["GPS integrado", "Compartimento refrigerado", "Acesso fácil"]
          }}
          company={{
            name: "Fast Delivery",
            location: "São Paulo, SP",
            since: "2020",
            vehiclesCount: 35
          }}
          route={{
            origin: "São Paulo, SP",
            destination: "São Bernardo, SP",
            isCovered: true,
            distance: "25 km"
          }}
          resources={[
            { text: "Entrega rápida", icon: Clock },
            { text: "Rastreamento online", icon: Map },
            { text: "Embalagem especial", icon: Package },
            { text: "Assinatura digital", icon: PenTool }
          ]}
          price={120}
          badge="Entrega rápida"
        /> */}
      </div>
    </div>
  )
}

// Cidade, Estado <=> Cidade, Estado
// Somente de dentro de Cidade, Estado
// De Todo Estado A <=> Para todo Estado A
// De Estado A <=> Para Todo Estado B
// etc

// linha fixa:
// Caruaru → Recife
// Recife → Goiana

// Transporte para um destino principal e específico
// Destino principal: Universidade X
// Embarque: São Paulo, SP, , Belo Horizonte

// Fretamento sob demanda (charter)
// Origem: Recife
// Destino: Porto de Galinhas



// o motorista cadastra as rotas que atende, por exemplo:
// São Paulo → Rio de Janeiro
// São Paulo → Belo Horizonte
// Belo Horizonte → Rio de Janeiro
// etc
// Origem e destino são flexíveis, podendo ser Universidade, Bairro, Cidade, Estado, etc
// O motorista também cadastra rotas com paradas entre origem e destino, por exemplo: