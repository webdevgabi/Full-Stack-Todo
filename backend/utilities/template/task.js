module.exports = (data) => {
    const { title, descripiton, priorityLevel, deadline, progress } = data;

    let task = {
        title: title,
        priorityLevel: priorityLevel,
        progress: progress
    }

    if(deadline) {
        task.deadline = deadline
    }

    if(descripiton) {
        task.descripiton = descripiton
    }

    return task
}