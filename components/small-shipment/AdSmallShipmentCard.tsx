export default function AdSmallShipment() {
  return (
    <div className="service-card" data-vehicle="motoboy" data-type="documentos,urgente">
      {/* <!-- Card 1: Motoboy para Documentos --> */}
      <div className="card-header">
        <div className="flex justify-between items-start">
          <div>
            <div className="card-title">Entrega de Documentos</div>
            <div className="card-subtitle">Motoboy Express - Zona Central</div>
          </div>
          <span className="card-badge">
            <i className="fas fa-motorcycle"></i> Motoboy
          </span>
        </div>
      </div>

      <div className="card-content">
        {/* <!-- Informações do prestador --> */}
        <div className="provider-info">
          <div className="provider-avatar">
            <i className="fas fa-user"></i>
          </div>
          <div>
            <div className="provider-name">Pedro Santos</div>
            <div className="provider-desc">Motoboy • 5 anos experiência • São Paulo</div>
          </div>
        </div>

        {/* <!-- Detalhes --> */}
        <div className="details-grid">
          <div className="detail-item">
            <div className="detail-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="detail-content">
              <div className="detail-value">1-2 horas</div>
              <div className="detail-label">Prazo médio</div>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <i className="fas fa-weight"></i>
            </div>
            <div className="detail-content">
              <div className="detail-value">Até 5kg</div>
              <div className="detail-label">Capacidade</div>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="detail-content">
              <div className="detail-value">Centro, Zona Sul</div>
              <div className="detail-label">Área de atuação</div>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="detail-content">
              <div className="detail-value">4.5/5</div>
              <div className="detail-label">128 avaliações</div>
            </div>
          </div>
        </div>

        {/* <!-- Tags --> */}
        <div className="tags-container">
          <span className="tag">
            <i className="fas fa-file-contract"></i> Documentos
          </span>
          <span className="tag">
            <i className="fas fa-envelope"></i> Envelopes
          </span>
          <span className="tag">
            <i className="fas fa-bolt"></i> Urgente
          </span>
        </div>

        {/* <!-- Footer --> */}
        <div className="card-footer">
          <div className="price-container">
            <div className="price-label">A partir de</div>
            <div className="price-value">R$ 15,00</div>
            <div className="price-note">por entrega</div>
          </div>
          <button className="action-btn">Solicitar</button>
        </div>
      </div>
    </div>
  )
}