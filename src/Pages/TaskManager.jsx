import React, { useReducer, useState } from 'react'


const initialState = []


const reducer = (Tasks, action) => {
  switch (action.type) {
    case 'Add_Task': return [
      ...Tasks,
      {
        id: Date.now(),
        TaskTitle: action.payload.title,
        TaskContent: action.payload.content,
        isEditing: false
      }]
    case 'Edit_Tasks': return Tasks.map((Task) =>
      Task.id === action.payload.id ? {
        ...Task,
        isEditing: true
      } : Task)

    case 'Delete_Tasks': return Tasks.filter((Task) => Task.id !== action.payload.id)

    case 'Save_Tasks':
      return Tasks.map((Task) =>
        Task.id === action.payload.id
          ? {
            ...Task,
            TaskTitle: action.payload.title,
            TaskContent: action.payload.content,
            isEditing: false
          }
          : Task
      )

    default:
      return Tasks
  }

}
const TaskManager = () => {
  const [editedId, setEditId] = useState()
  const [Tasks, dispatch] = useReducer(reducer, initialState)
  const [inputValue, setInputValue] = useState({
    text: '',
    Dis: ''
  })

  const handleSave = (event) => {
    event.preventDefault()
    if (editedId) {
      dispatch({ type: 'Save_Tasks', payload: { id: editedId, title: inputValue.text, content: inputValue.Dis } })
      setEditId(null)
      setInputValue({
        text: '',
        Dis: ''

      })
    } else if (inputValue.text.trim() && inputValue.Dis.trim() !== "") {
      dispatch({
        type: 'Add_Task', payload: { title: inputValue.text, content: inputValue.Dis }
      })
      setInputValue({
        text: '',
        Dis: ''

      })
    }

  }

  const handleBlur = () => {
    if (editedId) {
      saveChanges();
    }
  }
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      return saveChanges()
    } else if (e.key === 'Escape') {
      setEditId(null)
    }
  }

  const saveChanges = () => {
    if (editedId) {
      dispatch({ type: 'Save_Tasks', payload: { id: editedId, title: inputValue.text, content: inputValue.Dis } })
      setEditId(null)
      setInputValue({
        text: '',
        Dis: ''

      })
    }
  }
  const handleEdit = (Task) => {
    dispatch({ type: 'Edit_Tasks', payload: { id: Task.id } }) // 👈 yeh fix karo
    setInputValue({
      text: Task.TaskTitle,
      Dis: Task.TaskContent
    })
    setEditId(Task.id) // 👈 yeh fix karo (pehle galti se Task.isEditing set kar rahi thi)
  }

  return (
    <>

      <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl  mt-8 transition-all duration-300 ease-in-out">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Task Heading"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={inputValue.text}
            onBlur={handleBlur}
            onKeyDown={handleKey}
            onChange={(e) => setInputValue({ ...inputValue, text: e.target.value })}
          />
          <textarea
            placeholder="Enter Task Description"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={inputValue.Dis}
            onChange={(e) => setInputValue({ ...inputValue, Dis: e.target.value })}
          />
          <button
            onClick={handleSave}
            className="bg-linear-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-xl text-sm font-medium shadow-lg hover:scale-105 transition">
            Save
          </button>
        </form>
        <div
          className="flex mt-5">
        
          <div
            className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 ">

          {Tasks.map((Task) => (
            <div key={Task.id} className="bg-white p-6 items-center rounded-xl shadow-2xl">
              {editedId === Task.id ? (
                <h2 className="text-yellow-500 hover:scale-105 hover:text-shadow-lg font-bold text-center">Editing...</h2>
              ) : (
                <>
                    <h3 className="text-lg text-center font-semibold text-gray-800">{Task.TaskTitle}</h3>
                  <p className="text-gray-600">{Task.TaskContent}</p>
                </>
              )}

              <div className="flex justify-center flex-row gap-3 mt-3">
                <button
                  onClick={() => handleEdit(Task)}
                  className="bg-linear-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-xl text-sm font-medium shadow-lg hover:scale-105 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch({ type: "Delete_Tasks", payload: { id: Task.id } })}
                  className="bg-linear-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-xl text-sm font-medium shadow-lg hover:scale-105 transition"
                >
                  Delete
                </button>
               
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

    </>

  )
}

export default TaskManager