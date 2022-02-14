const Remarks = require('./model');

const getRemarks = (req,res) => {
    return res.status(200).json({
        success: true,
        message: "App Running."
    });
};

const addRemark = async(req, res) => {
    const _doc = new Remarks(req.body);
    let resp = await _doc.save();
    if(resp){
        return res.status(200).json({
            success: true,
            message: "Added remark successfully."
        });
    } else {
        return res.status(200).json({
            success: false,
            message: "Error adding to db."
        });
    }
}

module.exports = {
    getRemarks,
    addRemark,
}