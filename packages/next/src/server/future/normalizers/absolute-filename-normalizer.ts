import { absolutePathToPage } from '../../../shared/lib/page-path/absolute-path-to-page'
import { Normalizer } from './normalizer'

/**
 * Normalizes a given filename so that it's relative to the provided directory.
 * It will also strip the extension (if provided) and the trailing `/index`.
 */
export class AbsoluteFilenameNormalizer implements Normalizer {
  /**
   *
   * @param dir the directory for which the files should be made relative to
   * @param extensions the extensions the file could have
   * @param keepIndex when `true` the trailing `/index` is _not_ removed
   */
  constructor(
    private readonly dir: string,
    private readonly extensions: ReadonlyArray<string>
  ) {}

  public normalize(pathname: string): string {
    return absolutePathToPage(pathname, {
      extensions: this.extensions,
      keepIndex: false,
      pagesDir: this.dir,
    })
  }
}
