import { Request, Response } from "express";

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req: Request, res: Response) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create new contact
//@route POST /api/contacts
//@access public

const createContact = (req: Request, res: Response) => {
  res.status(201).json({ message: "Create Contact" });
};

//@desc Get contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req: Request, res: Response) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req: Request, res: Response) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req: Request, res: Response) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
