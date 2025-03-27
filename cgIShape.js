//
// fill in code that creates the triangles for a cube with dimensions 1x1x1
// on each side (and the origin in the center of the cube). with an equal
// number of subdivisions along each cube face as given by the parameter
//subdivisions
//
function makeCube(subdivisions) {
    subdivisions -= 1;
    const squareWidth = 1 / (2 ** subdivisions); // Size of each small square
    const half = 0.5; // Cube goes from -0.5 to 0.5

    function createFace(normal, uAxis, vAxis, offset) {
        for (let i = 0; i < 2 ** subdivisions; i++) {
            for (let j = 0; j < 2 ** subdivisions; j++) {
                // Compute four corners of the square
                const reverse = offset < 0;
                let x1 = -half + i * squareWidth;
                let y1 = -half + j * squareWidth;
                let x2 = x1 + squareWidth;
                let y2 = y1 + squareWidth;

                // Convert to 3D positions
                let p1 = { [uAxis]: x1, [vAxis]: y1, [normal]: offset };
                let p2 = { [uAxis]: x2, [vAxis]: y1, [normal]: offset };
                let p3 = { [uAxis]: x1, [vAxis]: y2, [normal]: offset };
                let p4 = { [uAxis]: x2, [vAxis]: y2, [normal]: offset };

                // Two triangles per square
                if (reverse) {
                    addTriangle(p1.x, p1.y, p1.z, p3.x, p3.y, p3.z, p2.x, p2.y, p2.z);
                    addTriangle(p2.x, p2.y, p2.z, p3.x, p3.y, p3.z, p4.x, p4.y, p4.z);
                } else {
                    addTriangle(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);
                    addTriangle(p2.x, p2.y, p2.z, p4.x, p4.y, p4.z, p3.x, p3.y, p3.z);
                }
            }
        }
    }

    // Generate faces (normal axis, u-axis, v-axis, normal offset)
    createFace("z", "x", "y", -half);  // Front (+Z)
    createFace("z", "x", "y", half); // Back (-Z)
    createFace("x", "z", "y", half);  // Right (+X)
    createFace("x", "z", "y", -half); // Left (-X)
    createFace("y", "z", "x", half);  // Top (+Y)
    createFace("y", "z", "x", -half); // Bottom (-Y)
}



//
// fill in code that creates the triangles for a cylinder with diameter 1
// and height of 1 (centered at the origin) with the number of subdivisions
// around the base and top of the cylinder (given by radialdivision) and
// the number of subdivisions along the surface of the cylinder given by
//heightdivision.
//
function makeCylinder (radialdivision,heightdivision){
    // fill in your code here.
}


//
// fill in code that creates the triangles for a cone with diameter 1
// and height of 1 (centered at the origin) with the number of
// subdivisions around the base of the cone (given by radialdivision)
// and the number of subdivisions along the surface of the cone
//given by heightdivision.
//
function makeCone (radialdivision, heightdivision) {
    // fill in your code here.
}
    
//
// fill in code that creates the triangles for a sphere with diameter 1
// (centered at the origin) with number of slides (longitude) given by
// slices and the number of stacks (lattitude) given by stacks.
// For this function, you will implement the tessellation method based
// on spherical coor + paddingdinates as described in the video (as opposed to the
//recursive subdivision method).
//
function makeSphere (slices, stacks) {
    // fill in your code here.
}


////////////////////////////////////////////////////////////////////
//
//  Do not edit below this line
//
///////////////////////////////////////////////////////////////////

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {

    
    var nverts = points.length / 4;
    
    // push first vertex
    points.push(x0);  bary.push (1.0);
    points.push(y0);  bary.push (0.0);
    points.push(z0);  bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); bary.push (0.0);
    points.push(y1); bary.push (1.0);
    points.push(z1); bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); bary.push (0.0);
    points.push(y2); bary.push (0.0);
    points.push(z2); bary.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}

