const express = require ('express')
const router = express.Router()
const { getTareas, createTareas, updateTareas, deleteTareas} = require ('../Controllers/tareasControllers')
const {protect} = require ('../middleware/authMiddelware')


//router.route('/').get(getTareas).post(createTareas)
router.get('/', protect, getTareas)
router.post('/', protect, createTareas)


//router.route('/:id').put(updateTareas).delete(deleateTareas)
router.put('/:id', protect,  updateTareas)
router.delete('/:id', protect, deleteTareas)



module.exports = router

