type PromiseFunc<T> = () => Promise<T>;

type QueueItem<T> = {
    promiseFunc: PromiseFunc<T>;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
};


export class RequestQueue {
    private queue: QueueItem<any>[];
    private currentCount: number;
    private readonly maxConcurrent: number;

    constructor(maxConcurrent: number = 4) {
        this.queue = [];
        this.currentCount = 0;
        this.maxConcurrent = maxConcurrent;
    }

    addRequest<T>(promiseFunc: PromiseFunc<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            this.queue.push({promiseFunc, resolve, reject});
            this.runNext();
        });
    }

    runNext() {
        if (this.queue.length === 0 || this.currentCount >= this.maxConcurrent) {
            return;
        }

        const {promiseFunc, resolve, reject} = this.queue.shift()!;

        this.currentCount++;

        promiseFunc()
            .then(resolve)
            .catch(reject)
            .finally(() => {
                this.currentCount--;
                this.runNext(); // 完成一个请求后，继续处理下一个
                if (this.queue.length > 0) { // 如果队列中还有请求，继续调度
                    this.runNext();
                }
            });
    }
}