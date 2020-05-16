import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faFacebookSquare,
    faInstagramSquare
} from '@fortawesome/free-brands-svg-icons'

import {
    faEnvelopeSquare,
    faRobot,
    faArrowLeft,
    faPoll
} from '@fortawesome/free-solid-svg-icons'

export default function faLibraryInit() {
    library.add(
        faFacebookSquare,
        faInstagramSquare,
        faEnvelopeSquare,
        faRobot,
        faArrowLeft,
        faPoll
    )
}
