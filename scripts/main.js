// import { getConvictions } from './convictions/ConvictionProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { CriminalList } from './criminals/CriminalList.js'
import { NoteForm } from './notes/NoteForm.js'
import { NoteList } from './notes/NoteList.js'
import { OfficerList } from './officers/OfficerList.js'
import { officerSelect } from './officers/OfficerSelect.js'
import './witnesses/WitnessList.js'
import './criminals/AlibiList.js'
import { witnessButton } from './witnesses/WitnessButton.js'
import { getNotes } from './notes/NoteDataProvider.js'
import { getCriminals } from './criminals/CriminalProvider.js'
import { facilityButton } from './facility/FacilityButton.js'


CriminalList()


ConvictionSelect()
OfficerList()
NoteForm()
// NoteList()
officerSelect()
witnessButton()
facilityButton()

getNotes()
    .then(getCriminals)
    .then(NoteList)

