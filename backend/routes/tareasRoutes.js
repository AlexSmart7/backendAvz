const express = require ('express')
const router = express.Router()
const { getTareas, createTareas, updateTareas, deleteTareas} = require ('../Controllers/tareasControllers')


//router.route('/').get(getTareas).post(createTareas)
router.get('/', getTareas)
router.post('/', createTareas)


//router.route('/:id').put(updateTareas).delete(deleateTareas)
router.put('/:id', updateTareas)
router.delete('/:id', deleteTareas)



module.exports = router

