module.exports = (data, id) => {
    const { title, descripiton, priorityLevel, deadline, progress } = data;

    let task = {
        title: title,
        priorityLevel: priorityLevel,
        progress: progress,
        ownerID: id
    }

    if(deadline) {
        task.deadline = deadline
    }

    if(descripiton) {
        task.descripiton = descripiton
    }

    return task
}