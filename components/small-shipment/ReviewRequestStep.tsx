import TextArea from "../TextArea";

interface Client {
  name: string;
  phone: string;
  email: string;
}

interface Travel {
  origin: string;
  destination: string;
  departureDatetime: string;
  returnDatetime: string;
  passengers: number;
  specialNeeds: boolean;
}
type Props = {
  client: Client;
  travel: Travel;
}

export default function ReviewRequestStep({ client, travel }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-slate-900">Revisão</h2>
        <p className="text-slate-500">Confirme os dados do orçamento</p>
      </div>
      <div className="space-y-4">
        <div className="bg-slate-50 rounded-xl p-4">
          <h3 className="font-medium text-slate-900 mb-3">Dados do Cliente</h3>
          <ul className="grid grid-rows-3 gap-2 text-sm">
            <li className="text-slate-500 grid grid-cols-2 ">
              <span id="name">Nome:</span><span aria-labelledby="name">{client.name}</span>
            </li>
            <li className="text-slate-500 grid grid-cols-2 ">
              <span id="email">Phone:</span><span aria-labelledby="Phone">{client.phone}</span>
            </li>
            <li className="text-slate-500 grid grid-cols-2 ">
              <span id="email">Email:</span><span aria-labelledby="email">{client.email}</span>
            </li>
          </ul>
        </div>
        <div className="bg-slate-50 rounded-xl p-4">
          <h3 className="font-medium text-slate-900 mb-3">Dados da Viagem</h3>
          <ul className="grid grid-rows-6 gap-2 text-sm">
            <li className="text-slate-500 grid grid-cols-2">
              <span id="origin">Origem:</span><span aria-labelledby="origin">{travel.origin}</span>
            </li>
            <li className="text-slate-500 grid grid-cols-2">
              <span id="destination">Destino:</span><span aria-labelledby="destination">{travel.destination}</span>
            </li>
            <li className="text-slate-500 grid grid-cols-2">
              <span id="departure-date">Data e horário de partida:</span><span aria-labelledby="departure-date">{travel.departureDatetime}</span>
            </li>
            <li className="text-slate-500 grid grid-cols-2">
              <span id="return-date">Data e horário de retorno:</span><span aria-labelledby="return-date">{travel.returnDatetime}</span>
            </li>
            <li className="text-slate-500 grid grid-cols-2">
              <span id="passenger-count">Passageiros:</span><span aria-labelledby="passenger-count">{travel.passengers}</span>
            </li>
            <li className="text-slate-500 grid grid-cols-2">
              <span id="has-attention">Necessidades especiais:</span><span aria-labelledby="has-attention">{travel.specialNeeds ? 'sim' : 'não'}</span>
            </li>
            {/* <li className="text-slate-500 grid grid-cols-2">
              <span id="has-attention">Sugestão de transportes:</span><span aria-labelledby="has-attention">{travel.specialNeeds ? 'sim' : 'não'}</span>
            </li> */}
          </ul>
        </div>
        <TextArea label="Informações adicionais" placeholder="Alguma observação sobre a viagem? (paradas, necessidades especiais, etc.)"/>
      </div>
    </div> 
  )
}

// dados da viagem:
// Origem  -> Cornélio Procópio - PR 
// Destino -> Londrina - PR
// Data e horário de partida -> 15/02/2026 08:00 (manhã)
// Data e horário de retorno -> 16/02/2026 12:30 (tarde)
// Passageiros -> 45
// Necessidades especiais -> sim
// Preferência -> vans | onibus