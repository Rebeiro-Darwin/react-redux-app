import { updateData, hideNotification } from '../actions/actions';
import store from '../store/store';

class TableCellEditing {
    constructor(table) {
        this.tbody = document.querySelector('tbody');
    }

    init() {
        this.tds = this.tbody.querySelectorAll('td');
        this.tds.forEach(td => {
            td.setAttribute('contentEditable', true);
            td.addEventListener('click', (ev) => {
                if (!this.inEditing(td)) {
                    this.startEditing(td)
                }
            })
        });
    }

    startEditing(td) {
        const activeTd = this.findEditing();
        if (activeTd) {
            this.cancelEditing(activeTd);
        }
        td.className = 'in-editing';
        td.setAttribute('data-old-value', td.innerHTML);
        this.createButtonToolbar(td);
        store.dispatch(hideNotification());
    }

    cancelEditing(td) {
        td.innerHTML = td.getAttribute('data-old-value');
        td.classList.remove('in-editing');
    }

    finishEditing(td) {
        td.classList.remove('in-editing');
        this.removeToolbar(td);
        store.dispatch(updateData(1)); // TODO - send the ID of selected row.
    }

    inEditing(td) {
        return td.classList.contains('in-editing')
    }

    createButtonToolbar(td) {
        const toolbar = document.createElement('div');
        toolbar.className = 'button-toolbar';
        toolbar.setAttribute('contentEditable', false);
        toolbar.innerHTML = `
        <button class="btn btn-sm btn-danger btn-cancel">Cancel</button>
        <button class="btn btn-sm btn-primary btn-save">Save</button>
        `
        td.appendChild(toolbar);

        const btnSave = toolbar.querySelector('.btn-save');
        const btnCancel = toolbar.querySelector('.btn-cancel');

        btnSave.addEventListener('click', (event) => {
            event.stopPropagation();
            this.finishEditing(td);
        });
        btnCancel.addEventListener('click', (event) => {
            event.stopPropagation();
            this.cancelEditing(td);
        })
    }

    removeToolbar(td) {
        const toolbar = td.querySelector('.button-toolbar');
        toolbar.remove();
    }

    findEditing() {
        return Array.prototype.find.call(this.tds, td => this.inEditing(td))
    }
}

export default TableCellEditing;
