class Accessor {
    constructor(model) {
        this.idKey = model.idKey;
        this.records = model.records;
        this.mutableKeys = model.mutableKeys;
    }

    //Methods

    create = (obj) => {
        const record = { ...obj, [this.idKey]: this.records.length + 1};
        this.records.push(record);
        return { isSuccess: true, result: record, message: "Record successfully inserted"}
    }

    read = (id) => {
        const record = this.records.find( (record) => record[this.idKey] === parseInt(id));
        return record
            ? { isSuccess: true, result: record, message: "Record successfully recovered"}
            : { isSuccess: false, result: null, message: `Record ${id} not found`}
    }

    update = (id, obj) => {
        const record = this.records.find( (record) => record[this.idKey] === parseInt(id));
        if (!record) return { isSuccess: false, result: null, message: `Record ${id} not found`};
        this.mutableKeys.map((key) => record[key] = obj[key] || record[key] );
        return { isSuccess: true, result: record, message: "Record successfully updated"}
    }

    delete = (id) => {
        const index = this.records.findIndex( (record) => record[this.idKey] === parseInt(id));
        if(index<0) return { isSuccess: false, result: null, message: `Record ${id} not found` };
        this.records.splice(index, 1);
        return { isSuccess: true, result: null, message: "Record successully deleted"}
    }
    
    list = () => {
        return this.records.length === 0 
        ? { isSuccess: false, result: null, message: "No records found"}
        : { isSuccess: true, result: this.records, message: "Records successfully recovered" }
    }

    
}

export default Accessor;