// E-commerce specific metrics
export const ecommerceMetrics = [
  {
    title: 'GMV Mensal',
    value: 700000,
    growth: 185,
    icon: 'ShoppingCart',
    formatter: (value: number) => new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value)
  },
  {
    title: 'Pedidos',
    value: 1547,
    growth: 156,
    icon: 'Package',
    formatter: (v: number) => v.toLocaleString('pt-BR')
  },
  {
    title: 'Ticket Médio',
    value: 452,
    growth: 75,
    icon: 'CreditCard',
    formatter: (value: number) => new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value)
  },
  {
    title: 'CAC Otimizado',
    value: 35,
    growth: -45,
    icon: 'Users',
    formatter: (value: number) => new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value),
    negative: true,
    description: 'Redução significativa no custo de aquisição'
  }
];

// Marketing agency metrics
export const agencyMetrics = [
  {
    title: 'Faturamento Mensal',
    value: 4850000,
    growth: 285,
    icon: 'DollarSign',
    formatter: (value: number) => new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value)
  },
  {
    title: 'Clientes Ativos',
    value: 5847,
    growth: 156,
    icon: 'Users',
    formatter: (v: number) => v.toLocaleString('pt-BR')
  },
  {
    title: 'Taxa de Conversão',
    value: 28.5,
    growth: 195,
    icon: 'Target',
    formatter: (v: number) => `${v}%`
  },
  {
    title: 'ROI Médio',
    value: 785,
    growth: 312,
    icon: 'TrendingUp',
    formatter: (v: number) => `${v}%`
  }
];