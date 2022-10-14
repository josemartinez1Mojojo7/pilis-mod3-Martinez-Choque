export const getClima = async (latitud, longitud) => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current_weather=true&timezone=America/Argentina/Jujuy`
    );
    return response.json();
  } catch {
    throw new Error("could not fetch Weather");
  }
};
