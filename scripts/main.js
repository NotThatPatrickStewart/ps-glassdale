// import { getConvictions } from './convictions/ConvictionProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { createAlibiListener } from './criminals/AlibiList.js'
import { CriminalList } from './criminals/CriminalList.js'
import { NoteForm } from './notes/NoteForm.js'
import { NoteList } from './notes/NoteList.js'
import { OfficerList } from './officers/OfficerList.js'
import { officerSelect } from './officers/OfficerSelect.js'

CriminalList()
ConvictionSelect()
OfficerList()
NoteForm()
NoteList()
officerSelect()
createAlibiListener()