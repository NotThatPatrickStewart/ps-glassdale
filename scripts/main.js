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

CriminalList()
ConvictionSelect()
OfficerList()
NoteForm()
NoteList()
officerSelect()
witnessButton()