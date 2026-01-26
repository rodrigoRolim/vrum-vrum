export default function VehicleComboSuggestion() {
  return (
    <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
      <p className="text-sm text-slate-600 mb-3">
        <span className="font-medium text-slate-900">Sugestão:</span> para 45 passageiors
        <span className="font-medium text-orange-600">1x 🚍 Ônibus + 1x 🚐 Van</span>
      </p>
      <p className="text-sm text-slate-600 mb-3">
        Tem preferência por algum tipo de veículo?
      </p>
      <div className="flex flex-wrap gap-2">
        <button className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all bg-white text-slate-700 hover:bg-orange-100">
          🚗 Carro Executivo
        </button>
      </div>
      <p className="text-xs text-slate-500 mt-2">Opcional - se não escolher, sugerimos o melhor para você</p>
    </div>
  )
}