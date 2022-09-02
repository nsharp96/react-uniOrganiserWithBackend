export class Controller {

    constructor(validator, accessor) {
        this.validator = validator;
        this.accessor = accessor;
    }
    //Methods

    list = async (req,res) => {
        //No validation required
        const { isSuccess, result, accessorMessage } = await this.accessor.list();
        if (!isSuccess) return res.status(400).json({ message: accessorMessage });

        res.json(result);
    };

    get = async (req, res) => {

        //Validate request 
        const { isError, message: validationMessage } = this.validator.validateID(req.params.id);
        if (isError) return res.status(400).json({message: validationMessage});

        //Access data model
        const { isSuccess, result, accessorMessage } = await this.accessor.read(req.params.id);
        if (!isSuccess) return res.status(404).json({ message: accessorMessage });

        //Repsonse to request
        res.json(result);
    };

    post = async (req,res) => {

        //Validate request 
        const { isError, message: validationMessage  } = this.validator.validateCreate(req.body);
        if (isError) return res.status(400).json({message: validationMessage });

        //Access data model
        const { isSuccess, result, message: accessorMessage } = await this.accessor.create(req.body);
        if (!isSuccess) return res.status(404).json({ message: accessorMessage });

        //Repsonse to request
        res.json(result);
    };

    put =  async (req,res) => {

        //Validate request 
        const { isError, message: validationMessage  } = this.validator.validateUpdate({id: req.params.id, obj: req.body});
        if (isError) return res.status(400).json({message: validationMessage });

        //Access data model
        const { isSuccess, result, message: accessorMessage } = await this.accessor.update(req.params.id, req.body);
        if (!isSuccess) res.status(404).json({ message: accessorMessage});

        //Repsonse to request
        res.json(result);
    };

    delete = async (req,res) => {

        //Validate request 
        const { isError, message: validationMessage  } = this.validator.validateID(req.params.id);
        if (isError) return res.status(400).json({message: validationMessage });

        //Access data model
        const { isSuccess, message: accessorMessage } = await this.accessor.delete(req.params.id);
        if (!isSuccess) res.status(404).json({ message: accessorMessage});

        //Repsonse to request
        res.json({ Message: `Record ${req.params.id} deleted`});
    };
}

export default Controller;
