import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access public

export const getContacts = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get all contacts" });
});

//@desc Create new contact
//@route POST /api/contacts
//@access public

export const createContact = asyncHandler(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    res.status(201).json({ message: "Create Contact" });
  }
);

//@desc Get contact
//@route GET /api/contacts/:id
//@access public

export const getContact = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public

export const updateContact = asyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).json({ message: `Update Contact for ${req.params.id}` });
  }
);

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public

export const deleteContact = asyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
  }
);
