export const itemStatusPickColor = (status) => {
  switch (status) {
    case 'PENDING':
      return '#eab308';
    case 'CONFIRMED':
      return '#22c55e';
    case 'CANCELLED':
      return '#ef4444';
    case 'CHECKEDIN':
      return '#6366f1';
  }
};
