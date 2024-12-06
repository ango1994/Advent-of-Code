import fs from 'fs'
import path from 'path'
import {fileURLToPath} from "url"

export function importInput(url) {
  const inputPath = path.resolve(path.dirname(fileURLToPath(url)), 'input.txt');

  try {
    const data = fs.readFileSync(inputPath, 'utf-8')
    return data;
  } catch (error) {
    console.error('File is not avaliable', error)
  }

}
