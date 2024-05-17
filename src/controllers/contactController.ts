import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access private

export const getContacts = asyncHandler(async (req: Request, res: Response) => {
  console.log("req");
  const contacts = await Contact.find({ user_id: req.user });
  res.status(200).json(contacts);
});

//@desc Create new contact
//@route POST /api/contacts
//@access private

export const createContact = asyncHandler(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const contact = await Contact.create({
      name,
      email,
      phone,
    });
    res.status(201).json(contact);
  }
);

//@desc Get contact
//@route GET /api/contacts/:id
//@access private

export const getContact = asyncHandler(async (req: Request, res: Response) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access private

export const updateContact = asyncHandler(
  async (req: Request, res: Response) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedContact);
  }
);

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private

export const deleteContact = asyncHandler(
  async (req: Request, res: Response) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    await Contact.remove();
    res.status(200).json(contact);
  }
);
