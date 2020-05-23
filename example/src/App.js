import React from 'react'

import { GetTicker } from 'ticker-lib'
import 'ticker-lib/dist/index.css'

let tickerObj= [
{
"title": "Mapa del coronavirus en México 22 de mayo: aumentan contagios en Chihuahua, Baja California y Veracruz - infobae"
},
{
"title": "Coronavirus. AMLO se reúne con su gabinete para evaluar acciones por Covid-19 | El Universal - El Universal"
},
{
"title": "Contratos a empresas por energías limpias se respetan: Nahle - Excélsior"
},
{
"title": "Habrá créditos para taxistas y comerciantes a través de Fonacot, anuncia AMLO - Noticieros Televisa"
},
{
"title": "Masacre en Temixco: asesinaron a ex funcionario de Peña Nieto y a otras cuatro personas - infobae"
},
{
"title": "Hot Sale 2020: fraudes más comunes que deberías evitar - Uno TV Noticias"
},
{
"title": "La última ocurrencia de la 4T - Excélsior"
},
{
"title": "“Primero los más pobres”: López Obrador insistió en que no habrá rescates a empresarios y repartirá cuatro millones de créditos populares - infobae"
},
{
"title": "Hablan 3 firmantes de la carta dirigida a Aristegui | Video - Aristeguinoticias"
},
{
"title": "en Vivo 22/05/20: Aumentan costos de corrupción; descartan eliminar Fidecine; capacidad hospitalaria y más - Aristeguinoticias"
},
{
"title": "Mapa del coronavirus en México 22 de mayo: aumentan contagios en Chihuahua, Baja California y Veracruz - infobae"
},
{
"title": "Coronavirus. AMLO se reúne con su gabinete para evaluar acciones por Covid-19 | El Universal - El Universal"
},
{
"title": "Contratos a empresas por energías limpias se respetan: Nahle - Excélsior"
},
{
"title": "Habrá créditos para taxistas y comerciantes a través de Fonacot, anuncia AMLO - Noticieros Televisa"
},
{
"title": "Masacre en Temixco: asesinaron a ex funcionario de Peña Nieto y a otras cuatro personas - infobae"
},
{
"title": "Hot Sale 2020: fraudes más comunes que deberías evitar - Uno TV Noticias"
},
{
"title": "La última ocurrencia de la 4T - Excélsior"
},
{
"title": "“Primero los más pobres”: López Obrador insistió en que no habrá rescates a empresarios y repartirá cuatro millones de créditos populares - infobae"
},
{
"title": "Hablan 3 firmantes de la carta dirigida a Aristegui | Video - Aristeguinoticias"
},
{
"title": "en Vivo 22/05/20: Aumentan costos de corrupción; descartan eliminar Fidecine; capacidad hospitalaria y más - Aristeguinoticias"
},
{
"title": "Mapa del coronavirus en México 22 de mayo: aumentan contagios en Chihuahua, Baja California y Veracruz - infobae"
},
{
"title": "Coronavirus. AMLO se reúne con su gabinete para evaluar acciones por Covid-19 | El Universal - El Universal"
},
{
"title": "Contratos a empresas por energías limpias se respetan: Nahle - Excélsior"
},
{
"title": "Habrá créditos para taxistas y comerciantes a través de Fonacot, anuncia AMLO - Noticieros Televisa"
},
{
"title": "Masacre en Temixco: asesinaron a ex funcionario de Peña Nieto y a otras cuatro personas - infobae"
}
]

const App = () => {
  return <GetTicker
  			tickerObj={tickerObj}
  		/>
}

export default App