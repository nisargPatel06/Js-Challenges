class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }
  dequeue() {
    if (this.queue.length === 0) return null;
    return this.queue.shift();
  }
  front() {
    if (this.queue.length === 0) return null;
    return this.queue[0];
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.front());

console.log(queue.dequeue());
console.log(queue.front());

class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  addJob(job) {
    this.queue.enqueue(job);
    console.log(`Assigned: ${job}`);
  }
  processJob() {
    const job = this.queue.dequeue();
    if (job) console.log(`Processing: ${job}`);
    else console.log("No jobs to process..");
  }
  viewNextJob() {
    const job = this.queue.front();
    if (job) console.log(`Next job: ${job}`);
    else console.log("No jobs in the queue..");
  }
}

const pq = new PrinterQueue();
pq.addJob("Task1");
pq.addJob("Task2");
pq.viewNextJob();
pq.processJob();
pq.processJob();
pq.processJob();
