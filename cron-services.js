module.exports = {
  getCronFromPeriod
}

function getCronFromPeriod (period, hours, minutes) {
  return {
    daily: `* ${Number(minutes)} ${Number(hours)} * * *`,
    weekly: `${Number(minutes)} ${Number(hours)} * * */7`,
    monthly: `${Number(minutes)} ${Number(hours)} * 1-12 *`
  }[period]
}
