import { Subject } from 'rxjs/Subject';

export class SpinnerService {

    status: boolean;
    spinnerStatus = new Subject();

    startSpinner() {
        this.status = true;
        this.spinnerStatus.next(this.status);
    }

    stopSpinner() {
        this.status = false;
        this.spinnerStatus.next(this.status);
    }

}
