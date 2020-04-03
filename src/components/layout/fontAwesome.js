import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faFacebookSquare, 
    faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

import {
    faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'

export default function faLibraryInit(){
    library.add(
        faFacebookSquare, 
        faInstagramSquare,
        faEnvelopeSquare
    )
}
