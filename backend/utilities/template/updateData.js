module.exports = (data) => {
    const { title, descripiton, priorityLevel, deadline, progress } = data;

    const newData = {}

    if(title) {
        newData.title = title
    }

    if(descripiton) {
        newData.descripiton = descripiton
    }

    if(priorityLevel) {
        newData.priorityLevel = priorityLevel
    }

    if(deadline) {
        newData.deadline = deadline
    }

    if(progress) {
        newData.progress = progress
    }

    return newData
}