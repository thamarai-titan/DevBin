import type { Request, Response } from "express";
import {
  CreateToolService,
  DeleteToolService,
  GetallToolsService,
  GettoolService,
  SaveToolService,
  UnsaveToolService,
} from "./tools.service";
import { responses } from "../../lib/responses";
import { ToolSchema, type ToolType } from "./tools.schema";
import { Prisma } from "@prisma/client";
interface Params {
  toolId: string;
}

export const GetallToolsController = async (req: Request, res: Response) => {
  try {
    const tools = await GetallToolsService();

    res.status(200).json(
      responses.success({
        tools,
      }),
    );
  } catch (error: any) {
    if (error.message === "NO_TOOLS") {
      return res.status(401).json(responses.error("NO_TOOLS"));
    }
    return res.status(500).json(responses.error("INTERNEL_SERVER_ERROR"));
  }
};

export const GetToolController = async (
  req: Request<Params>,
  res: Response,
) => {
  try {
    const toolId = req.params.toolId;
    const tool = await GettoolService(toolId);
    if (!tool) {
      return res.status(401).json(responses.error("TOOL_NOT_FOUND"));
    }
    res.status(200).json(
      responses.success({
        tool,
      }),
    );
  } catch (error) {
    res.status(500).json(responses.error("INTERNEL_SERVER_ERROR"));
  }
};

export const CreatetoolController = async (req: Request, res: Response) => {
  try {
    const data: ToolType = ToolSchema.parse(req.body);

    const tool = await CreateToolService(data);

    res.status(201).json(
      responses.success({
        tool,
      }),
    );
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json(responses.error("INVALID_INPUT"));
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return res.status(409).json(responses.error("TOOL_ALREADY_EXISTS"));
      }

      if (error.code === "P2003") {
        return res.status(400).json(responses.error("INVALID_CATEGORY"));
      }
    }

    return res.status(500).json(responses.error("INTERNAL_SERVER_ERROR"));
  }
};

export const DeleteToolController = async (
  req: Request<Params>,
  res: Response,
) => {
  try {
    const toolId = req.params.toolId;

    const tool = await DeleteToolService(toolId);

    return res.status(200).json(
      responses.success({
        message: "Tool deleted",
      }),
    );
  } catch (error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return res.status(404).json(responses.error("TOOL_NOT_FOUND"));
      }
    }

    return res.status(500).json(responses.error("INTERNAL_SERVER_ERROR"));
  }
};

export const SaveToolController = async (
  req: Request<Params>,
  res: Response,
) => {
  try {
    const toolId = req.params.toolId;
    const userId = req.userId;

    const savedTool = await SaveToolService(toolId, userId);

    res.status(200).json({
      "message": "Tool saved successfully"
    });

  } catch (error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2003") {
        return res.status(409).json(responses.error("Invalid user or tool"));
      }
    }
    return res.status(500).json(responses.error("INTERNEL_SERVER_ERROR"));
  }
};

export const UnsaveToolController = async (
  req: Request<Params>,
  res: Response,
) => {
  try {
    const toolId = req.params.toolId;
    const userId = req.userId;

    const savedTool = await UnsaveToolService(toolId, userId);

    res.status(200).json({
      "message" : "Tool Removed from saved list"
    });

  } catch (error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2003") {
        return res.status(409).json(responses.error("Invalid user or tool"));
      }
    }
    return res.status(500).json(responses.error("INTERNEL_SERVER_ERROR"));
  }
};

